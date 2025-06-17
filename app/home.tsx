// app/home.tsx
import { Image, ImageBackground, SafeAreaView, View } from 'react-native';
import TText from './components/StyledText';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/splashimg.jpg')} 
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
        <SafeAreaView >
        <View className='flex flex-col items-center h-[100%] justify-evenly'>
        <View className=' flex flex-col items-center '>
        <Image
        source={require('../assets/images/ecac.heic')}
        className="w-56 h-56 rounded-full mb-8"
      />
      <TText className="text-black text-[24px] font-montserrat-semibold">Preaching The Gospel...</TText>
        </View>
        
      <View className=' flex flex-col items-center'>
        <TText className='text-[#074975] text-[32px] mb-4 font-montserrat-semibold'>Sunday School</TText>
        <TText className='text-[#931414] text-[24px] font-montserrat-semibold'>For Year 2025</TText>
      </View>
      <View className='flex flex-col items-center'>
        <TText className='text-[#074975] text-[32px] font-montserrat-semibold'>Essentials For</TText>
        <TText className='text-[#074975] text-[32px] font-montserrat-semibold'>Christian Living</TText>
      </View>
        </View>
        </SafeAreaView>
        
        
    </ImageBackground>
  );
}

