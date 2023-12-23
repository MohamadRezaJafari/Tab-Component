import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  // const activeTab = 3;
  // const state=useState(2);
  // console.log(state);
  // *ست اکتیو تب ایندکس یکم این آرایه میباشد یک فانکشنه که فقط وظیفه اش آپدیت کردن استیت اکتیو تب میباشد
  // !اکتیو تب ایندکس صفرام خود مقدار استیت یوزاستیت را نشان میدهد

  const [activeTab, setActiveTab] = useState(1);
  // console.log(activeTab);
  // const [user, setUser] = useState({ name: "Reza" });

  const [isOpen, setIsOpen] = useState(true);

  const [count, setCount] = useState(0);

  const handleActiveTab = (id) => {
    // console.log(id);
    setActiveTab(id);

    // setUser({ name: "ali" });

    // not work:
    // !هرچندبار تکرار کنیم کانت صفر میباشد و فقط با هربار کلیک یکی اضافه میگردد
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // updating state based on prev state value:callback method!
    // *  با کال بک متد زمانیکه مقدار استیت شما به مقدار قبلی وابسته است
    // *اینگونه سه تا سه تا اضافه میگردد
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      {/* <button onClick={() => setIsOpen(!isOpen)}>✖️</button> */}
      <button onClick={() => setIsOpen((is) => !is)}>✖️</button>
      {isOpen ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tab) => (
              <button
                onClick={() => handleActiveTab(tab.id)}
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
          <div className="tab__content">
            {tabData[activeTab - 1].content} - {count}
          </div>
        </div>
      ) : (
        // *   برای اینکه تب دیتا آرایه میباشد و اولی میشود صفرم و برای دسترسی به اولی که شمارش یک میباشد یک منهای یک میشود ایندکس صفرم که میشود اولی
        <p>Closed.</p>
      )}
    </div>
  );
}

export default App;
