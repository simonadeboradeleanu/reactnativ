import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

const Container = styled.View`
  flex: 1;
  padding: 8px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #007bff;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
`;

const GameListContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

const GameListItem = styled.Text`
  margin-bottom: 10px;
`;

interface Props {
  games: any[];
  showMyGames: boolean;
  handleShowMyGames: () => void;
  handleShowAllGames: () => void;
  filterGamesByPlayerId: (games: any[], playerId: any) => any[];
  playerId: string;
}

const Lobby: React.FC<Props> = ({
  games,
  showMyGames,
  handleShowMyGames,
  handleShowAllGames,
  filterGamesByPlayerId,
  playerId,
}) => {
  const filteredGames = showMyGames
    ? filterGamesByPlayerId(games, playerId)
    : games;

  return (
    <Container>
      <ButtonContainer>
        <Button onPress={handleShowMyGames}>
          <ButtonText>My Games</ButtonText>
        </Button>
        <Button onPress={handleShowAllGames}>
          <ButtonText>All Games</ButtonText>
        </Button>
      </ButtonContainer>
      <GameListContainer>
        <ScrollView>
          {filteredGames.map((game: any, index: number) => (
            <GameListItem key={index}>{game}</GameListItem>
          ))}
        </ScrollView>
      </GameListContainer>
    </Container>
  );
};

export default Lobby;
