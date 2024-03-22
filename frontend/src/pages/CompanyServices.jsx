import serviceCardData from "../assets/dummy_services";
import { DashHeader } from "../components/DashHeader";
import ServiceCard from "../components/ServiceCard";

export function CompanyServices(){
    return <div>
        <DashHeader/>
        <div className="non-expired bg-primary-100">
        <div className="cards">
          {serviceCardData.map((data, index) => (
            <ServiceCard
              key={index}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
}