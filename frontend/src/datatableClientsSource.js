export const clientColumns =[
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 70 
    },
    {
        field:"client", 
        headerName:"Full Name", 
        width:230, 
        renderCell: (params) => 
        {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.client}
                </div>  
            );
        }
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
        field:"address", 
        headerName:"Address", 
        width:270,
    },


];

//temporary data
export const clientRows = [
    {
      id: 1,
      client: "Oriana Toubia",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      address: "123 Main St, Anytown, USA",
      email: "oriana.toubia@example.com",
      phone: "+1 (123) 456-7890",
    },
    {
        id: 2,
        client: "John Smith",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        address: "456 Elm St, Cityville, USA",
        email: "john.smith@example.com",
        phone: "+1 (345) 678-9012"
    },
    {
        id: 3,
        client: "Emma Johnson",
        img: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        address: "789 Oak Ave, Smalltown, USA",
        email: "emma.johnson@example.com",
        phone: "+1 (234) 567-8901"
    },
    {
        id: 4,
        client: "Michael Brown",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        address: "987 Maple Dr, Suburbia, USA",
        email: "michael.brown@example.com",
        phone: "+1 (456) 789-0123"
    },
    {
        id: 5,
        client: "Sophia Lee",
        img: "https://images.pexels.com/photos/1564123/pexels-photo-1564123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        address: "321 Pine Ln, Ruralville, USA",
        email: "sophia.lee@example.com",
        phone: "+1 (567) 890-1234"
    },
    {
        id: 6,
        client: "Daniel Wilson",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        address: "654 Cedar Rd, Townsville, USA",
        email: "daniel.wilson@example.com",
        phone: "+1 (678) 901-2345"
    },
    {
        id: 7,
        client: "Emily Anderson",
        img: "https://images.pexels.com/photos/3760868/pexels-photo-3760868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        address: "135 Walnut St, Villagetown, USA",
        email: "emily.anderson@example.com",
        phone: "+1 (789) 012-3456"
    },
    {
        id: 8,
        client: "Lucas Martinez",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        address: "246 Birch Ave, Countyville, USA",
        email: "lucas.martinez@example.com",
        phone: "+1 (890) 123-4567"
    },
    {
        id: 9,
        client: "Isabella Thompson",
        img: "https://images.pexels.com/photos/2221875/pexels-photo-2221875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        address: "975 Spruce Ct, Harbourtown, USA",
        email: "isabella.thompson@example.com",
        phone: "+1 (901) 234-5678"
    },
    {
        id: 10,
        client: "Liam Rodriguez",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
        address: "864 Ash Pl, Mountainville, USA",
        email: "liam.rodriguez@example.com",
        phone: "+1 (012) 345-6789"
    }
  ];