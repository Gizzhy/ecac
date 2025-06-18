// app/home.tsx
import { ImageBackground, SafeAreaView, TouchableOpacity, View } from 'react-native';
import TText from './components/StyledText';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/hand.jpg')} 
      resizeMode="cover"
      className="flex-1 justify-center items-center"
    >
        <View className='bg-white/60 h-[100%] w-[100%]'>
            <SafeAreaView >
                    <TText className='text-center font-montserrat-bold text-[35px] mt-[30px]'>Welcome Back</TText>
                    <View className='flex flex-col items-center mt-[30%]'>
                        <TText className='text-[#219BEC] text-[25px] font-montserrat-semibold border border-black rounded-[10px] px-3 py-3'>Select Language</TText>
                        <View className="flex-row mt-[30px]">
                            <TouchableOpacity className="bg-[#074975] px-6 py-4 rounded-md mr-4">
                                <TText className="text-white font-montserrat-semibold text-[16px]">English</TText>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-[#074975] px-6 py-4 rounded-md">
                                <TText className="text-white font-montserrat-semibold text-[16px]">Yoruba</TText>
                            </TouchableOpacity>
                        </View>
                    </View>
            </SafeAreaView>
        </View>
    </ImageBackground>
  );
}

