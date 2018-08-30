using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UBtech.Dal;
using UBtech.Entities;

namespace UBTech.Bl
{
    public static class UBTechBl
    {
        public static List<PersonDTO> GetAllPeopleBl()
        {
            return UBTechDal.GetAllPeopleDal();
        }
    }
}
