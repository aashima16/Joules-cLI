import React, { useState , useEffect} from 'react'
import Header from '../components/Header';
import TextInput from '../components/TextInput'
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Text, View, Linking } from 'react-native';
import Button from '../components/Button'
import Background from '../components/Background';
import { useDispatch, useSelector } from 'react-redux';
import { Click, Clicked, EcoMode, ScheduleMode, BalanceMode } from '../Redux/Action';
import { SetDate } from '../Redux/Action';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DatePicker from 'react-native-modern-datepicker';
// import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';
import Loago1 from '../components/Loago1';
import Logo from '../components/Logo';
// import { Click } from '../Redux/Action';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function SceduleDate({ navigation }) {
  const dispatch = useDispatch()
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false)
  const [sample,setSample]=useState(false)
  
  const[storingDate,setStoringDate]=useState()
  const [storingTime,setStoringTime]=useState()
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [userr, setUserDataa] = React.useState({ field1: 'eco_mode_off', field2: "" });

  const Porduct_Key = useSelector(state => state?.userReducers?.Product?.name)
  console.log(Porduct_Key);
  
  const [scheduleData, setScheduleData] = React.useState({  Time: null,"Charging Mode": "Slow_Mode", Current_Battery:"" , Product_Key:``});
  console.log(scheduleData);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  useEffect(()=>{
    setStoringTime(Porduct_Key)
  },[])
  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = (date) => {
  //   console.warn("A date has been picked: ", date);
  //   hideDatePicker();
  // };
  // const [user, setUserData] = React.useState({ field1: '', field2: "" });
  // console.log(user);
  
  
//   const onChange=(event, selectedDate)=>{
//     setShow(false)
//     setSample(false)
//     const currentDate=selectedDate||date;
//     setDate(currentDate)
//     // console.log(date,"hello");
//     let tempDate =new Date(currentDate);
//     let fDate =tempDate.getDate()+'-'+(tempDate.getMonth()+1)+'-'+tempDate.getFullYear();
//     let fTime = tempDate.getHours()+":"+tempDate.getMinutes()
//     console.log(fDate);
//     console.log(fTime,"hear");
//    setScheduleData(prevState => ({
//       ...prevState,
//       Date: fDate
//     }));
//     // setStoringTime(fTime)
//     // console.log(userr);
//   }
  const onChangee=(event, selectedDate)=>{
    setShow(false)
    setSample(false)
    const currentDate=selectedDate||date;
    setDate(currentDate)
    // console.log(date,"hello");
    let tempDate =new Date(currentDate);
    let fDate =tempDate.getDate()+'-'+(tempDate.getMonth()+1)+'-'+tempDate.getFullYear();
    let fTime = tempDate.getHours()+":"+tempDate.getMinutes()
    console.log(fDate);
    console.log(fTime,"hear");
    // setStoringDate(fDate)
    setScheduleData(prevState => ({
      ...prevState,
      Time: fTime
    }));
    // console.log(userr);
  }
  // useEffect(() => {
  //   // Retrieve data from AsyncStorage when the component mounts
  //   retrieveData();
  // }, []);

  // const retrieveData = async () => {
  //   try {
  //     const storedData = await AsyncStorage.getItem('Product_Key');
  //     if (storedData !== null) {
  //       // setUserData(storedData);
  //       setScheduleData(prevState => ({
  //         ...prevState,
  //         Product_Key: storedData
  //       }));
  //       // console.log(storedData,"sampleretrive");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const Clicke=()=>{
    // dispatch(ScheduleMode(scheduleData));
    dispatch(Clicked(scheduleData,Porduct_Key));
    navigation.navigate('Navbar')
  }

  return (
    <Background>
      <Logo></Logo>
      <Header >To start the slow mode you need to set the given parameters!!! </Header>

     
     
     {/* <Button
        mode="contained"
        onPress={()=>setShow(true)}
        >
     Set Date
      </Button> */}
      {/* <Header>{scheduleData?.Date}</Header> */}
      {/* <Header>{storingTime}</Header> */}
      {/* <TextInput
        style={styles.input}
        onPress={()=>setShow(true)}
        // value={text}
      /> */}
      <Button
        mode="contained"
        onPress={()=>setSample(true)}
        >
        Set Time
      </Button>
      <Header>{scheduleData?.Time}</Header> 
      {/* <TextInput
        style={styles.input}
        onPress={()=>setShow(true)}
        // value={text}
      /> */}

<TextInput
        label="Current Battery"
        returnKeyType="done"
        value={scheduleData.Current_Battery}
        name="Current_Battery"
        
        onChangeText={(txt) => {
          setScheduleData((prevData) => ({ ...prevData, Current_Battery: txt }));
        }}
      />

     {show==true ? <DateTimePicker display="spinner" value={date} onChange={onChange}/>:<Header></Header>}
     {sample==true ? <DateTimePicker display="spinner" timeZoneOffsetInSeconds={3600}  mode="time" value={time} onChange={onChangee}/>:console.log("vewjk",time)}

      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      
      <Button
        mode="contained"
        onPress={Clicke}
      >
        OK
      </Button>
    </Background>
  )
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 50,
    padding: 10,
    margin: 10
  },sample:{
    fontSize: 21,
    // color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    
  }

})
