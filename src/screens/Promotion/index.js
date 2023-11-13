import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  ArrowRight2,
  Home2,
  DiscountShape,
  Bag,
  MessageText1,
} from 'iconsax-react-native';
import {fontType, colors} from './../../theme';

// Main
export default function Promotion() {
  return (
    <View style={styles.container}>
      <Header />

      {/* Content */}
      <ScrollView>
        <SmallCard />
        <PromoCode />
        <PromoCategory />
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
      <Text style={styles.title}>Promo</Text>
    </View>
  );
};
// End Header

// Small Card
const SmallCard = () => {
  return (
    <View style={smallCard.container}>
      <TouchableOpacity style={smallCard.card}>
        <View style={smallCard.content}>
          <Text style={smallCard.text}>5</Text>
          <ArrowRight2 size="16" color={colors.grey(1)} />
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Medium'],
              fontSize: 14,
            }}>
            Voucher
          </Text>
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Light'],
              fontSize: 12,
            }}>
            Berlaku s/d 21 November
          </Text>
        </View>
        <View style={{...smallCard.line, backgroundColor: 'orange'}} />
      </TouchableOpacity>
      <TouchableOpacity style={smallCard.card}>
        <View style={smallCard.content}>
          <Text style={smallCard.text}>1</Text>
          <ArrowRight2 size="16" color={colors.grey(1)} />
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Medium'],
              fontSize: 13,
            }}>
            Subscriptions
          </Text>
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Light'],
              fontSize: 12,
            }}>
            Active 
          </Text>
        </View>
        <View
          style={{...smallCard.line, backgroundColor: 'rgb(209, 6, 182)'}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={smallCard.card}>
        <View style={smallCard.content}>
          <Text style={smallCard.text}>0</Text>
          <ArrowRight2 size="16" color={colors.grey(1)} />
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Medium'],
              fontSize: 13,
            }}>
            Missions
          </Text>
        </View>
        <View style={smallCard.content}>
          <Text
            style={{
              ...smallCard.text,
              fontFamily: fontType['Pjs-Light'],
              fontSize: 12,
            }}>
            In Progress
          </Text>
        </View>
        <View
          style={{...smallCard.line, backgroundColor: 'rgb(6, 189, 209)'}}
        />
      </TouchableOpacity>
    </View>
  );
};
// End Small Card

// Promo Code
const PromoCode = () => {
  return (
    <TouchableOpacity style={promoCode.container}>
      <View style={{...promoCode.content, width: 260}}>
        <DiscountShape size="28" color="rgb(240, 146, 5)" variant="Bold" />
        <Text style={promoCode.text}>Got a promo code? Enter here</Text>
      </View>
      <View style={promoCode.content}>
        <ArrowRight2 size="16" color={colors.grey(1)} />
      </View>
    </TouchableOpacity>
  );
};
// End Promo Code

// Promo Category
const PromoCategory = () => {
  return (
    <View style={promoCategory.container}>
      <Text style={promoCategory.title}>Promos you can't resist</Text>
      <View style={promoCategory.itemContainer}>
        <TouchableOpacity
          style={{
            ...promoCategory.itemSmall,
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: 'white',
          }}>
          <Text
            style={{
              ...promoCategory.text,
              color: 'white',
              fontFamily: fontType['Pjs-Bold'],
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={promoCategory.itemSmall}>
          <Text style={promoCategory.text}>GoCar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={promoCategory.itemSmall}>
          <Text style={promoCategory.text}>GoFood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={promoCategory.itemSmall}>
          <Text style={promoCategory.text}>Gopay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={promoCategory.itemSmall}>
          <Text style={promoCategory.text}>Promos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// End Promo Category

// StyleSheet
// --Main--
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    height: 60,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.grey(0.4),
  },
  title: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 24,
    color: 'black',
  },
});

// --Small Card--
const smallCard = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    padding: 10,
    width: 115,
    height: 100,
    borderWidth: 1,
    borderColor: colors.grey(0.3),
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
  },
  line: {
    marginTop: 3,
    width: 95,
    height: 5,
    backgroundColor: 'black',
    borderRadius: 5,
  },
});

// --Promo Code--
const promoCode = StyleSheet.create({
  container: {
    height: 50,
    marginTop: 15,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.grey(0.3),
    borderRadius: 30,
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 14,
  },
});

// --Promo Category--
const promoCategory = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  title: {
    color: 'black',
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 20,
  },
  itemContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemSmall: {
    height: 30,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: colors.grey(0.3),
    borderRadius: 30,
  },
  text: {
    paddingVertical: 3,
    color: 'black',
    fontFamily: fontType['Pjs-Regular'],
    fontSize: 13,
  },
});
// End StyleSheet
