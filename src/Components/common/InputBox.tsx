import React, { useCallback, useContext, useState } from "react";
import { Form, notification, Input, Select ,Tooltip } from "antd";
import { InputContainer } from "./style";
import {
  weatherByName,
  getWeatherByCityID,
  getWeatherByGeoCord,
} from "../../utils/FetchAPIUtils";
import { WeatherContext } from "../../context/WeatherContext";
import { VISIBLESCREEN, DROPDOWN ,ERROR } from "../../constants";

const { Option } = Select;
const { Search } = Input;

const openNotification = (text: string) => {
  if (text === ERROR) {
    notification.error({
      message: "Error",
      description: "No record found....",
    });
  } else {
    notification.success({
      message: "Success",
      description: "Your Record found",
    });
  }
};

const loginInputFormRules = (required: boolean, name: string) => [
  {
    required,
    message: `Please input your ${name}!`,
  },
];

const InputBox: React.FC = () => {
  const { dispatch } = useContext(WeatherContext);
  const [dropDown, setdropDown] = useState<string>("");
  let lat: number;
  let lon: number;

  const onSearch = useCallback(async (searchText: any) => {
    if (dropDown === DROPDOWN.CITYNAME) {
      const resp = await weatherByName(searchText);
      dispatch({
        type: VISIBLESCREEN,
        payload: {
          tab: 1,
          data: resp,
        },
      });
      openNotification("success");
    } 
    else if (dropDown === DROPDOWN.CITYID) {
      const resp = await getWeatherByCityID(searchText);
      dispatch({
        type: VISIBLESCREEN,
        payload: {
          tab: 1,
          data: resp,
        },
      });
      openNotification("success");
    }
     else if (dropDown === DROPDOWN.ZIPCODE) {
      const resp = await getWeatherByGeoCord(lat, lon);
      console.log(resp);
    } 
    else {
      openNotification("error");
    }
  },[dropDown,dispatch]);
  
  const handleChange = (value: string) => {
    setdropDown(value);
  };
  const selectBefore = (
    <Tooltip title="Select type" placement="bottom">
    <Select defaultValue="" onChange={handleChange}>
      <Option value="">
        <b>Please Select</b>
      </Option>
      <Option value="city Name">City Name</Option>
      <Option value="city Id">City id</Option>
      <Option value="zip Code">Zip Code</Option>
    </Select>
    </Tooltip>
  );

  return (
    <InputContainer>
      <Form>
        <Form.Item
          name="City Name"
          rules={loginInputFormRules(true, "CityName")}
        >
           <Tooltip title="Enter Value" placement="bottom">
          <Search
            addonBefore={selectBefore}
            placeholder="search term"
            onSearch={onSearch}
            enterButton
          />
          </Tooltip>
        </Form.Item>
      </Form>
    </InputContainer>
  );
};

export default InputBox;
