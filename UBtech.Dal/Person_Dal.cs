using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UBtech.Entities;

namespace UBtech.Dal
{
    public class Person_Dal
    {
        public static List<PersonDTO> GetAllPeopleDal()
        {
            List<PersonDTO> result = new List<PersonDTO>();

            using (var context = new UBTechDBEntities())
            {
                result = PersonConverter.FromDbToDto(context.Persons.ToList());
            }

            return result;
        }
    }
}
