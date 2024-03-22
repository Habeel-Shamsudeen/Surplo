import './popup.css'
export function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner bg-secondary-400 rounded-lg">
        <div className="btn" onClick={()=>window.open("https://www.justdial.com/Ernakulam/Sneha-Bhavan-Palluruthy-Near-Syrian-Church-Palluruthy-Industrial-Area/0484PX484-X484-000825701943-F0P9_BZDET?ncatid=10344906&area=&search=Top%20Orphanages%20in%20Ernakulam&mncatname=Orphanages&abd_btn=&abd_heading=&bd=1&")}>Sneha Bhavan</div>
        <div className="btn" onClick={()=>window.open("https://www.justdial.com/Ernakulam/Don-Bosco-Boys-Home-Near-Don-Bosco-Badminton-Academy-Palluruthy/0484PX484-X484-210923222305-B7F5_BZDET?ncatid=10344906&area=&search=Top%20Orphanages%20in%20Ernakulam&mncatname=Orphanages&abd_btn=&abd_heading=&bd=1&")}>Don Bosco Orphanage</div>
        {props.childern}
      </div>
    </div>
  ) : (
    ""
  );
}
