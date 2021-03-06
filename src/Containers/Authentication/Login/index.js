import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, Button, Text } from 'react-native'
import { Layout, Fonts } from '@/Theme'
import { CustomLayout, CustomButton } from '@/Components'
import { useDispatch, useSelector } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'
import { CommonActions } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import OtpText from './Components/OtpText'
import OTPInputView from './Components/OtpInput'

const Login = ({ navigation }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const isApplicationLoading = useSelector((state) => state.startup.loading)
    const [mobile, setMobile] = useState('')
    useEffect(() => {
        dispatch(InitStartup.action())
    }, [dispatch])

    navigateHome = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Main' }],
            }),
        )
    }
    return (
        <View style={[Layout.fill, Layout.rowCenter]}>
            {isApplicationLoading ? (
                <ActivityIndicator />
            ) : (
                    <CustomLayout
                        isLogin={true}
                        loginPlaceHolder={t('login.input')}
                        value={mobile}
                        onChangeText={setMobile}
                    >
                        <OtpText />
                        <OTPInputView />
                        <CustomButton
                            title={t('login.submit')}
                            onPress={navigateHome}
                        />
                    </CustomLayout>
                )}
        </View>
    )
}

export default Login
