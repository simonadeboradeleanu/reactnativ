import styled from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity, Text, View } from 'react-native';
import { AuthRouteNames } from '../../router/route-names';
import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/authContext"
import { getUserDetails } from "../../api";
import Profile from "../../components/Profile"

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
  background-color: #f9f9f9;
`;

const UserInfo = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
  margin-bottom: 20px;
`;

const UserInfoText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const LogoutButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #007bff;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  elevation: 5;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const [userDetails, setUserDetails] = useState<any>(null);
  const authentication = useAuth();


  // Assuming userDetails are passed as params
  useEffect(() => {
    const fetchData = async () => {
        try {
            const userDetailsResponse = await getUserDetails();
            setUserDetails(userDetailsResponse);
            await authentication.userDetails();
        } catch (error) {
            console.error("Failed to fetch user details:", error);
        }
        
    };

    fetchData();
}, []);

  const handleLogout = () => {
    // Perform logout logic here
    navigation.navigate(AuthRouteNames.LOGIN);
  };

    const handleGoToLobby = () => {
        navigation.navigate(AuthRouteNames.LOBBY);
    };

return userDetails ? (
    <Profile
        email={userDetails.email}
        currentlyGamesPlaying={userDetails.currentlyGamesPlaying}
        gamesLost={userDetails.gamesLost}
        gamesPlayed={userDetails.gamesPlayed}
        gamesWon={userDetails.gamesWon}
        onLogOut={handleLogout}
        goToLobby={handleGoToLobby}
    />
) : null;
// 
};

export default ProfileScreen;
