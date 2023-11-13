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
  Drivers,
} from './../../assets/Images';

// Main
export default function Homepage() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <SearchNormal1
            color={colors.black()}
            variant="Linear"
            size={24}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchbar}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
          />
          <ProfileCircle
            color={colors.grey(0.6)}
            variant="Bold"
            size={47}
            style={styles.profileIcon}
          />
        </View>
      </View>
      {/* End Header */}

      {/* Content */}
      <ScrollView>
        <ImageBackground source={sprite} style={styles.image} />
        <Wallet />
        <Menu />
        <Rating />
      </ScrollView>
      {/* End Content */}
    </View>
  );
}
// End Main

// Wallet Function
const Wallet = () => {
  return (
    <View style={wallet.container}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'row',
        }}>
        <Wallet3
          color="#176B87"
          variant="Bold"
          size={30}
          style={wallet.wallet}
        />
        <View style={wallet.debit}>
          <Text style={wallet.saldo}>Rp.500.000</Text>
          <Text style={wallet.coin}>270 Coins</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingLeft: 6,
        }}>
        <View style={wallet.pay}>
          <CardSend color="#176B87" variant="Bold" size={30} />
          <Text style={wallet.payText}>Bayar</Text>
        </View>
        <View style={wallet.history}>
          <Clock color="#176B87" variant="Bold" size={30} />
          <Text style={wallet.payText}>Riwayat</Text>
        </View>
        <View style={wallet.more}>
          <MoreCircle color="#176B87" variant="Bold" size={30} />
          <Text style={wallet.payText}>Lainnya</Text>
        </View>
      </View>
    </View>
  );
};
// End Wallet Function

// Menu Function
const Menu = () => {
  return (
    <View style={menu.container}>
      <View style={menu.rowContainer}>
        <View style={menu.category}>
          <View style={menu.background}>
            <Image source={scooter} style={menu.icon} />
          </View>
          <Text style={menu.iconText}>GoRide</Text>
        </View>
        <View style={menu.category}>
          <View style={menu.background}>
            <Image source={car} style={menu.icon} />
          </View>
          <Text style={menu.iconText}>GoCar</Text>
        </View>
        <View style={menu.category}>
          <View style={menu.background}>
            <Image source={spoon} style={menu.icon} />
          </View>
          <Text style={menu.iconText}>GoFood</Text>
        </View>
        <View style={menu.category}>
          <View style={menu.background}>
            <Image source={box} style={menu.icon} />
          </View>
          <Text style={menu.iconText}>GoSend</Text>
        </View>
      </View>
      <View style={menu.rowContainer}>
        <View style={menu.category}>
          <View style={menu.background}>
            <Image source={shopping} style={menu.icon} />
          </View>
          <Text style={menu.iconText}>GoMart</Text>
        </View>
        <View style={menu.category}>
          <View style={menu.background}>
            <Image source={bill} style={menu.icon} />
          </View>
          <Text style={menu.iconText}>GoTagihan</Text>
        </View>
        <View style={menu.category}>
          <View style={menu.background}>
            <Image source={train} style={menu.icon} />
          </View>
          <Text style={menu.iconText}>GoTransit</Text>
        </View>
        <View style={menu.category}>
          <View style={menu.background}>
            <Image source={more} style={menu.icon} />
          </View>
          <Text style={menu.iconText}>Lainnya</Text>
        </View>
      </View>
    </View>
  );
};
// End Menu Function

// Rating Function
const Rating = () => {
  return (
    <View style={rating.container}>
      <Text style={rating.title}>Kasih rating dulu, yuk!</Text>
      <View style={rating.horizontalCard}>
        <View style={rating.header}>
          <Text style={rating.logo}>GoFood</Text>
          <CloseCircle size="32" color={colors.black(0.5)} />
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={rating.content}>
            <Image source={Drivers} style={rating.driver} />
            <View style={rating.description}>
              <Text
                style={{
                  ...rating.text,
                  marginBottom: 5,
                  color: colors.black(),
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Kasih rating ke driver?
              </Text>
              <Text style={rating.text}>Domino's Pizza - Dinoyo Malang</Text>
              <Text style={rating.text}>08 Okt 19:27</Text>
            </View>
          </View>
          <View style={rating.footer}>
            <TouchableOpacity style={{paddingHorizontal: 3}}>
              <Star1 size="32" color={colors.black(0.65)} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 3}}>
              <Star1 size="32" color={colors.black(0.65)} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 3}}>
              <Star1 size="32" color={colors.black(0.65)} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 3}}>
              <Star1 size="32" color={colors.black(0.65)} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal: 3}}>
              <Star1 size="32" color={colors.black(0.65)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
// End Rating Function

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  image: {
    width: '100%',
    height: 160,
    objectFit: 'cover',
  },
  header: {
    height: 70,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    padding: 20,
    elevation: 8,
  },
  searchbar: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
  },
  iconContainer: {
    paddingRight: 20,
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  profileIcon: {
    position: 'absolute',
    left: 315,
    top: -3,
  },
});

const wallet = StyleSheet.create({
  container: {
    width: 'auto',
    height: 60,
    top: -30,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white(),
    borderWidth: 1,
    borderColor: '#FFF7F6',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  wallet: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  saldo: {
    fontSize: 16,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  coin: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Reguler'],
    color: colors.black(),
  },
  pay: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  history: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  more: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  payText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
});

const menu = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 20,
    marginVertical: -8,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  category: {
    alignItems: 'center',
  },
  background: {
    width: 65,
    height: 65,
    backgroundColor: colors.AmericanGreen(0.6),
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 45,
    height: 45,
  },
  iconText: {
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 14,
    color: colors.black(),
  },
});

const rating = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 20,
    color: colors.black(),
  },
  horizontalCard: {
    width: 345,
    height: 195,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 8,
    marginBottom: 25,
    borderRadius: 15,
    backgroundColor: colors.white(),
    elevation: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginBottom: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  driver: {
    width: 100,
    height: 100,
  },
  description: {
    marginTop: 5,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 13,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.grey(),
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
  },
});
// End StyleSheet
