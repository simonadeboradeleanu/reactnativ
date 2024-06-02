import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/authContext";
import { listGames } from "../../api";
import { SafeAreaView } from "react-native-safe-area-context";
import Lobby from "../../components/Lobby";

const LobbyScreen = () => {
  const auth = useAuth();
  const navigation = useNavigation();
  const [games, setGames] = useState([]);
  const [showMyGames, setShowMyGames] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesResponse = await listGames(auth.token);
        setGames(gamesResponse.games);
        //await auth.userDetails();
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchGames();
  }, []);

  const filterGamesByPlayerId = (games: any[], playerId: any) => {
    return games.filter((game: any) => {
      // Check if the current user is player1 or player2 in the game
      return game.player1Id === playerId || game.player2Id === playerId;
    });
  };

  const handleShowMyGames = () => {
    setShowMyGames(true);
  };

  const handleShowAllGames = () => {
    setShowMyGames(false);
  };

  const playerId = auth.userDetails ? auth.userDetails.user.id : null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Lobby
        games={games}
        showMyGames={showMyGames}
        handleShowMyGames={handleShowMyGames}
        handleShowAllGames={handleShowAllGames}
        filterGamesByPlayerId={filterGamesByPlayerId}
        playerId={playerId}
      />
    </SafeAreaView>
  );
};

export default LobbyScreen;
