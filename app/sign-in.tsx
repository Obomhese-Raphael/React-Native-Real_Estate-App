import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons';
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';

const SignIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();
  
  const handleLogin = async () => {
    // Handle Google login logic here
    const result = await login();

    if (result) {
      refetch();
      console.log('Login successful');
    } else {
      // Show error message
      console.log('Login failed');
      Alert.alert('Login Failed', 'Please try again later.');
    }
  }
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />
        <View className='px-10'>
          <Text className='text-base text-center font-rubik text-black-200 uppercase'>Welcome to ReState</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Let&apos;s Get You Closer to {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg text-black-200 text-center mt-12 font-rubik'>Login to Restate with Google</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn