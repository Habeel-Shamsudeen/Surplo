export function InputBoxLogin({label,placeholder,onChange,type}){
 return <div className="mx-0.5">
    <div className="text-md font-medium py-2 text-left">
        {label}
    </div>
    <input type={type} onChange={onChange} placeholder={placeholder} className="w-full px-2 py-1 border-none rounded border-slate-200"/>
 </div>
}