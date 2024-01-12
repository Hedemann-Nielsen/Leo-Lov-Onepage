import { Emplyee } from "./Employees";
import Sophie from '../../assets/emplyees/Sophie.jpg';
import Thomas from '../../assets/emplyees/Thomas.jpg';
import Camilla from '../../assets/emplyees/Camilla.jpg';
import Jens from '../../assets/emplyees/Jens.jpg';
import Michelle from '../../assets/emplyees/Michelle.jpg';


  const employeesData = [
    {
        picture: Sophie,
        navn: 'Sophie Marie Jensen',
        karierre: 'Advokat',
        uddannelse: 'Cand.jur. fra Københavns Universitet',
      },
      {
        picture: Thomas,
        navn: 'Thomas Sebastian Madsen',
        karierre: 'Specialist inden for erhvervsret',
        uddannelse: 'LL.M. i Erhvervsret fra Aarhus Universitet',
      },
      {
        picture: Camilla,
        navn: 'Camilla Louise Hansen',
        karierre: 'Familieretsadvokat',
        uddannelse: 'Cand.jur. med speciale i Familie- og Arveret',
      },
      {
        picture: Jens,
        navn: 'Jens Peter Andersen',
        karierre: 'Strafferetsadvokat',
        uddannelse: 'Cand.jur. med fokus på Strafferet',
      },
      {
        picture: Michelle,
        navn: 'Michelle Charlotte Pedersen',
        karierre: 'Immigrationsadvokat',
        uddannelse: 'LL.B. i International Ret fra Roskilde Universitet',
      },
  ];
  
 export const EmployeeList = () => {
    return (
        <>
            <div>
                
                {employeesData.map((employee, index) => (
                <Emplyee key={index} {...employee} />
                ))}
            </div>
        </>
    );
  };
  