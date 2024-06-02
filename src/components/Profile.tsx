import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: hotpink;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoutButton = styled(Button)`
  background-color: pink;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const UserText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const UserDetailsContainer = styled.View`
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 30px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

const UserDetailsText = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
  color: #666;
`;

export interface IUserDetails {
  email: string;
  currentlyGamesPlaying: number;
  gamesLost: number;
  gamesPlayed: number;
  gamesWon: number;
  onLogOut: () => void;
  goToLobby: () => void;
}

const Profile: React.FC<IUserDetails> = ({
  email,
  currentlyGamesPlaying,
  gamesLost,
  gamesPlayed,
  gamesWon,
  onLogOut,
  goToLobby
}) => {
  return (
    <Container>
      <UserDetailsContainer>
        <UserText>User: {email}</UserText>
        <UserDetailsText>Games playing: {currentlyGamesPlaying}</UserDetailsText>
        <UserDetailsText>Games lost: {gamesLost}</UserDetailsText>
        <UserDetailsText>Games played: {gamesPlayed}</UserDetailsText>
        <UserDetailsText>Games won: {gamesWon}</UserDetailsText>
      </UserDetailsContainer>
      <Button onPress={goToLobby}>
        <ButtonText>Go to Lobby</ButtonText>
      </Button>
      <LogoutButton onPress={onLogOut}>
        <ButtonText>Log out</ButtonText>
      </LogoutButton>
    </Container>
  );
};

export default Profile;
