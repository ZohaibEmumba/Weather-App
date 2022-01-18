import React,{useContext,useState} from "react"
import { Col, Row, Input, Select } from "antd"
import { InputContainer } from "./style"
import { weatherByName ,getWeatherByCityID ,getWeatherByGeoCord} from "../../utils/FetchAPIUtils"
import { WeatherContext } from "../../context/WeatherContext"
import { VISIBLESCREEN ,DROPDOWN} from "../../constants"

const { Option } = Select
const { Search } = Input

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
    }
    else if(dropDown === DROPDOWN.CITYID){
      const resp = await getWeatherByCityID(searchText)
      console.log(resp)
    }
    else {
      const resp = await getWeatherByGeoCord(lat , lon)
      console.log(resp)
    }
  };
  const handleChange = (value:string) => {
    console.log(value);
    setdropDown(value)
  }
  const selectBefore = (
    <Select defaultValue="city Name" onChange={handleChange}>
      <Option value="city Name">City Name</Option>
      <Option value="city Id">City id</Option>
      <Option value="zip Code">Zip Code</Option>
    </Select>
  );

  return (
        <InputContainer>
          <Search
            addonBefore={selectBefore}
            placeholder="search term"
            onSearch={onSearch}
            enterButton
          />
        </InputContainer>
  );
};

export default InputBox;
