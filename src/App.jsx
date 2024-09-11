import { useEffect, useState } from "react";
import Prayer from "./components/Prayer";

export default function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState("kahramanmaras");

  const cities = [
    { name: "أضنا", value: "adana" },
    { name: "اديامان", value: "adiyaman" },
    { name: "أفبون", value: "afyonkarahisar" },
    { name: "أغري", value: "agri" },
    { name: "أماسيا", value: "amasya" },
    { name: "أنقرة", value: "ankara" },
    { name: "أنطاليا", value: "antalya" },
    { name: "أردهان", value: "ardahan" },
    { name: "أرتفين", value: "artvin" },
    { name: "أيدين", value: "aydin" },
    { name: "بالكسير", value: "balikesir" },
    { name: "بارتين", value: "bartin" },
    { name: "باتمان", value: "batman" },
    { name: "بايبورت", value: "bayburt" },
    { name: "بيليك دوزو", value: "bilecik" },
    { name: "بينغول", value: "bingol" },
    { name: "بتليس", value: "bitlis" },
    { name: "بولو", value: "bolu" },
    { name: "بوردور", value: "burdur" },
    { name: "بورصة", value: "bursa" },
    { name: "جناق قلعة", value: "canakkale" },
    { name: "تشانكيري", value: "cankiri" },
    { name: "جوروم", value: "corum" },
    { name: "دنيزلي", value: "denizli" },
    { name: "ديار بكر", value: "diyarbakir" },
    { name: "دوزجي", value: "duzce" },
    { name: "أدرنة", value: "edirne" },
    { name: "إلازيغ", value: "elazig" },
    { name: "أرضروم", value: "erzurum" },
    { name: "إسكي شهير", value: "eskisehir" },
    { name: "غازي عنتاب", value: "gaziantep" },
    { name: "غيرسون", value: "giresun" },
    { name: "جوموش خان", value: "gumushane" },
    { name: "هكاري", value: "hakkari" },
    { name: "هاتاي", value: "hatay" },
    { name: "إغدير", value: "igdir" },
    { name: "إسبرطة", value: "isparta" },
    { name: "إسطنبول", value: "istanbul" },
    { name: "إزمير", value: "izmir" },
    { name: "كهرمان مرعش", value: "kahramanmaras" },
    { name: "كارابوك", value: "karabuk" },
    { name: "كارامان", value: "karaman" },
    { name: "كارس", value: "kars" },
    { name: "كاستامونو", value: "kastamonu" },
    { name: "قيسري", value: "kayseri" },
    { name: "قيركلاريل", value: "kirklareli" },
    { name: "قيرشهير", value: "kirsehir" },
    { name: "كيلس", value: "kilis" },
    { name: "كوجالي", value: "kocaeli" },
    { name: "قونية", value: "konya" },
    { name: "كتاهيا", value: "kutahya" },
    { name: "مالاطية", value: "malatya" },
    { name: "مانيسا", value: "manisa" },
    { name: "ماردين", value: "mardin" },
    { name: "مرسين", value: "mersin" },
    { name: "موغلا", value: "mugla" },
    { name: "موش", value: "mus" },
    { name: "نيف شهير", value: "nevsehir" },
    { name: "نيغدة", value: "nigde" },
    { name: "أوردو", value: "ordu" },
    { name: "عثمانية", value: "osmaniye" },
    { name: "ريزا", value: "rize" },
    { name: "ساكاريا", value: "sakarya" },
    { name: "سامسون", value: "samsun" },
    { name: "شانلي أورفا", value: "sanliurfa" },
    { name: "سيرت", value: "siirt" },
    { name: "سينوب", value: "sinop" },
    { name: "شرناق", value: "sirnak" },
    { name: "سيفاس", value: "sivas" },
    { name: "تكيرداغ", value: "tekirdag" },
    { name: "طوقات", value: "tokat" },
    { name: "طرابزون", value: "trabzon" },
    { name: "تونجلي", value: "tunceli" },
    { name: "أوشاك", value: "usak" },
    { name: "فان", value: "van" },
    { name: "يالوفا", value: "yalova" },
    { name: "يوزغات", value: "yozgat" },
    { name: "زونغولداك", value: "zonguldak" },
  ];

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.aladhan.com/v1/timingsByCity/03-09-2024?city=${selectedCity}&country=TR`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    console.log(data);
  };

  function getCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  }


  return (
    <div className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center min-h-screen flex items-center font-bold">
      <div className="container w-full h-5/ sm:w-[450px] md:w-[550px] bg-[#332a224a] py-8 px-5 md:px-7 backdrop-blur-sm border border-gray-400 rounded-lg mx-5 sm:mr-[10%] lg:mr-[15%]">
        <div className="top-sec flex flex-col md:flex-row items-start md:items-center justify-between border-b border-gray-400 pb-5 md:pb-10 mb-5 md:mb-10">
          <div className="city w-full md:w-auto mb-5 md:mb-0">
            <h3 className="text-[20px] md:text-[24px] text-white">المدينة</h3>
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="w-full md:w-[250px] h-8 rounded-sm outline-none bg-amber-600 text-white mt-3"
            >
              {cities.map((city, index) => (
                <option key={index} value={city.value}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className="data w-full md:w-auto self-end">
            <h3 className="text-[20px] md:text-[24px] text-white">التاريخ</h3>
            <h4 className="text-[20px] md:text-[24px] text-white">
              {getCurrentDate()}
            </h4>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="spinner"></div>
          </div>
        ) : data.data?.timings ? (
          <>
            <Prayer name="الفجر" time={data.data.timings.Fajr} />
            <Prayer name="الظهر" time={data.data.timings.Dhuhr} />
            <Prayer name="العصر" time={data.data.timings.Asr} />
            <Prayer name="المغرب" time={data.data.timings.Maghrib} />
            <Prayer name="العشاء" time={data.data.timings.Isha} />
          </>
        ) : (
          <div>بيانات الصلاة غير متاحة</div>
        )}
      </div>
    </div>
  );
}
