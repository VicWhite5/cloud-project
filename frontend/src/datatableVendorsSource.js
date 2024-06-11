export const vendorColumns =[
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 50 
    },
    {
        field:"vendor", 
        headerName:"Display Name", 
        width:220, 
        renderCell: (params) => 
        {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.name}
                </div>  
            );
        }
    },
    {
        field:"name", 
        headerName:"Full Name", 
        width:150
    },
    {
        field:"email", 
        headerName:"E-mail", 
        width:250
    },

    {
        field:"phone", 
        headerName:"Phone Number", 
        width:180
    },
    {
        field:"birth", 
        headerName:"Date of birth", 
        width:150,
    }


];

//temporary data
export const vendorRows = [
    {
      id: 1,
      name: "Oriana Toubia",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      birth: "12/1/1990",
      email: "oriana.toubia@example.com",
      phone: "+1 (123) 456-7890",
    },
    {
        id: 2,
        name: "John Smith",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        birth: "5/7/1995",
        email: "john.smith@example.com",
        phone: "+1 (345) 678-9012"
    },
    {
        id: 3,
        name: "Emma Johnson",
        img: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        birth: "8/12/1992",
        email: "emma.johnson@example.com",
        phone: "+1 (234) 567-8901"
    },
    {
        id: 4,
        name: "Michael Brown",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        birth: "25/10/1989",
        email: "michael.brown@example.com",
        phone: "+1 (456) 789-0123"
    },
    {
        id: 5,
        name: "Sophia Lee",
        img: "https://images.pexels.com/photos/1564123/pexels-photo-1564123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        birth: "17/3/1994",
        email: "sophia.lee@example.com",
        phone: "+1 (567) 890-1234"
    },
    {
        id: 6,
        name: "Daniel Wilson",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        birth: "9/11/1988",
        email: "daniel.wilson@example.com",
        phone: "+1 (678) 901-2345"
    },
    {
        id: 7,
        name: "Emily Anderson",
        img: "https://images.pexels.com/photos/3760868/pexels-photo-3760868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        birth: "7/9/1987",
        email: "emily.anderson@example.com",
        phone: "+1 (789) 012-3456"
    },
    {
        id: 8,
        name: "Lucas Martinez",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        birth: "20/6/1991",
        email: "lucas.martinez@example.com",
        phone: "+1 (890) 123-4567"
    },
    {
        id: 9,
        name: "Isabella Thompson",
        img: "https://images.pexels.com/photos/2221875/pexels-photo-2221875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        birth: "14/2/1993",
        email: "isabella.thompson@example.com",
        phone: "+1 (901) 234-5678"
    },
    {
        id: 10,
        name: "Liam Rodriguez",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
        birth: "3/4/1996",
        email: "liam.rodriguez@example.com",
        phone: "+1 (012) 345-6789"
    },
  ];