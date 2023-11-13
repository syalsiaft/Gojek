import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowRight2,
  Clock,
  SearchNormal1,
  ProfileCircle,
  Wallet3,
  CardSend,
  MoreCircle,
  CloseCircle,
  Star1,
  Home2,
  DiscountShape,
  Bag,
  MessageText1,
  Category,
  ArrowDown2,
  TickCircle,
} from 'iconsax-react-native';
import {fontType, colors} from './../../theme';
import {
  sprite,
  box,
  bill,
  more,
  scooter,
  shopping,
  spoon,
  train,
  car,
  driver,
  download,
} from './../../assets/Images';

// Main
export default function Chat() {
  return (
    <View style={styles.container}>
      <Header />

      {/* Content */}
      <ScrollView>
        <Action />
        <Text
          style={{
            marginHorizontal: 15,
            marginBottom: 10,
            fontFamily: fontType['Pjs-Bold'],
            fontSize: 16,
            color: colors.black(),
          }}>
          Your chats
        </Text>
        <Chats />
      </ScrollView>
      {/* End Content */}
    </View>
  );
}
// End Main

// Header
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Chat</Text>
    </View>
  );
};
// End Header

// Action
const Action = () => {
  return (
    <View style={action.container}>
      <Text
        style={{
          ...action.text,
          color: 'black',
          fontFamily: fontType['Pjs-Bold'],
          fontSize: 15,
        }}>
        Quick actions
      </Text>
      <View style={action.cardContainer}>
        <TouchableOpacity style={action.card}>
          <View style={{...action.icon, backgroundColor: 'yellow'}} />
          <Text style={action.text}>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={action.card}>
          <View style={{...action.icon, backgroundColor: 'blue'}} />
          <Text style={action.text}>Help tickets</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// End Action

// Chat
const Chats = () => {
  return (
    <TouchableOpacity style={chat.container}>
      <ProfileCircle size="46" color={colors.blue(0.6)} variant="Bulk" />
      <View style={chat.content}>
        <Text style={chat.text}>Alfina</Text>
        <Text style={{...chat.text, fontFamily: fontType['Pjs-Regular']}}>
          10/11/23
        </Text>
      </View>
    </TouchableOpacity>
  );
};
// End Chat

// StyleSheet
// --Main--
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    height: 60,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.grey(0.4),
    alignContent: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 24,
    color: 'black',
  },
});

// --Action--
const action = StyleSheet.create({
  container: {
    width: 300,
    padding: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  card: {
    paddingTop: 15,
    paddingBottom: 10,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  text: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 14,
    color: colors.grey(),
  },
});

// Chat
const chat = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
  },
  card: {
    marginHorizontal: 15,
  },
  content: {
    top: -10,
    width: 320,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.black(0.9),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 15,
  },
});
// End StyleSheet
