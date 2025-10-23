import React, { useState } from "react";
import Day from "./componants/Day";
import Time from "./componants/time";
const App = () => {
  const [selectedCity, setSelectedCity] = useState("Cairo");
  const governorates = [
    { name: "القاهرة", value: "Cairo" },
    { name: "الجيزة", value: "Giza" },
    { name: "الإسكندرية", value: "Alexandria" },
    { name: "القليوبية", value: "Qalyubia" },
    { name: "الدقهلية", value: "Dakahlia" },
    { name: "الشرقية", value: "Sharqia" },
    { name: "الغربية", value: "Gharbia" },
    { name: "المنوفية", value: "Monufia" },
    { name: "كفر الشيخ", value: "Kafr El Sheikh" },
    { name: "البحيرة", value: "Beheira" },
    { name: "دمياط", value: "Damietta" },
    { name: "بورسعيد", value: "Port Said" },
    { name: "الإسماعيلية", value: "Ismailia" },
    { name: "السويس", value: "Suez" },
    { name: "شمال سيناء", value: "North Sinai" },
    { name: "جنوب سيناء", value: "South Sinai" },
    { name: "الفيوم", value: "Fayoum" },
    { name: "بني سويف", value: "Beni Suef" },
    { name: "المنيا", value: "Minya" },
    { name: "أسيوط", value: "Assiut" },
    { name: "سوهاج", value: "Sohag" },
    { name: "قنا", value: "Qena" },
    { name: "الأقصر", value: "Luxor" },
    { name: "أسوان", value: "Aswan" },
    { name: "البحر الأحمر", value: "Red Sea" },
    { name: "الوادى الجديد", value: "New Valley" },
    { name: "مطروح", value: "Matrouh" },
  ];

  const [prayers] = useState([
    {
      key: "Fajr",
      name: " الفجر",
    },
    {
      key: "Dhuhr",
      name: " الظهر",
    },
    {
      key: "Asr",
      name: "العصر",
    },
    {
      key: "Maghrib",
      name: " المغرب",
    },
    {
      key: "Isha",
      name: " العشاء",
    },
  ]);
  return (
    <div className="main-div">
      <div className="contanar">
        <div className="top-section">
          <div>
            <h3>المدينة</h3>
            <select
              name="city"
              onChange={(e) => setSelectedCity(e.target.value)}
              value={selectedCity}
            >
              {governorates.map((gov, index) => (
                <option value={gov.value} key={index}>
                  {gov.name}
                </option>
              ))}
            </select>
          </div>
          <div className="date">
            <h3>التاريخ</h3>
            <Day />
          </div>
        </div>
        <div className="prayers-time">
          <Time prayers={prayers} city={selectedCity} />
        </div>
      </div>
    </div>
  );
};

export default App;
