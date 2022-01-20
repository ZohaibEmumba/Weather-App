import React,{useContext,useState} from "react"
import {Form, notification , Input, Select } from "antd"
import { InputContainer } from "./style"
import { weatherByName ,getWeatherByCityID ,getWeatherByGeoCord} from "../../utils/FetchAPIUtils"
import { WeatherContext } from "../../context/WeatherContext"
import { VISIBLESCREEN ,DROPDOWN} from "../../constants"

const { Option } = Select
const { Search } = Input

const openNotification = (text:string) => {
  if("error"){
  notification.error({
    message: 'Error',
    description:
      'No record found....',
  });}
  else{
    notification.error({
      message: 'Success',
      description:
        'Your Record found',
    })}
};

const loginInputFormRules = (required: boolean, name: string) => [
  {
    required,
    message: `Please input your ${name}!`,
  },
];



const InputBox: React.FC = () => {
  const { dispatch } = useContext(WeatherContext)
  const [dropDown, setdropDown] = useState<string>("")
  let lat :number 
  let lon :number

  const onSearch = async(searchText: any) => {

    if (dropDown === DROPDOWN.CITYNAME ) {
      const resp = await weatherByName(searchText)
      dispatch({
        type: VISIBLESCREEN,
        payload: {
          tab:1,
          data : resp
        },
      });
      openNotification('success');
    }
    else if(dropDown === DROPDOWN.CITYID){
      const resp = await getWeatherByCityID(searchText)
      console.log(resp)
    }
    else if(dropDown === DROPDOWN.ZIPCODE) {
      const resp = await getWeatherByGeoCord(lat , lon)
      console.log(resp)
    }
    else {
      openNotification('error');
    }
  };
  const handleChange = (value:string) => {
    console.log(value);
    setdropDown(value)
  }
  const selectBefore = (
    <Select defaultValue="" onChange={handleChange}>
      <Option value=""><b>Please Select</b></Option>
      <Option value="city Name">City Name</Option>
      <Option value="city Id">City id</Option>
      <Option value="zip Code">Zip Code</Option>
    </Select>
  );

  return (
        <InputContainer>
        <Form>
        <Form.Item name="City Name" rules={loginInputFormRules(true, "City Name")}>
          <Search
            addonBefore={selectBefore}
            placeholder="search term"
            onSearch={onSearch}
            enterButton
  
          />
        </Form.Item>
        </Form>
        </InputContainer>
  );
};

export default InputBox;
