using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UBtech.Entities;

namespace UBtech.Dal
{
    public static class PersonConverter
    {
        public static List<PersonDTO> FromDbToDto(List<Persons> fromDb)
        {
            return fromDb.Select(person => new PersonDTO
            {
                Id = person.Id,
                FirstName = person.FirstName,
                LastName = person.LastName
            }).ToList();
        }
    }
}
