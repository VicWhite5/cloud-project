export const userColumns =[
    { field: 'id', headerName: 'ID', width: 70 },
    {field:"user", headerName:"User", width:230, renderCell: (params) => 
        {
        return(
      <div className="cellWithImg">
        <img className="cellImg" src={params.row.img} alt="avatar"/>
        {params.row.username}
      </div>  
      );
        }
    },
    {
        field:"email", 
        headerName:"E-mail", 
        width:330
    },

    {
        field:"age", 
        headerName:"Age", 
        width:120
    },
    {
        field:"status", 
        headerName:"Status", 
        width:200,
        renderCell: (params) =>{
            return <div className={` cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
    },


];

//temporary data
export const userRows = [
    {
      id: 1,
      username: "Oriana Toubia",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      status: "active",
      email: "oriana.toubia@example.com",
      age: 35,
    },
    {
        id: 2,
        username: "John Smith",
        img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "john.smith@example.com",
        age: 28
    },
    {
        id: 3,
        username: "Emma Johnson",
        img: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: "passive",
        email: "emma.johnson@example.com",
        age: 42
    },
    {
        id: 4,
        username: "Michael Brown",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "michael.brown@example.com",
        age: 34
    },
    {
        id: 5,
        username: "Sophia Lee",
        img: "https://images.pexels.com/photos/1564123/pexels-photo-1564123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: "pending",
        email: "sophia.lee@example.com",
        age: 30
    },
    {
        id: 6,
        username: "Daniel Wilson",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "passive",
        email: "daniel.wilson@example.com",
        age: 45
    },
    {
        id: 7,
        username: "Emily Anderson",
        img: "https://images.pexels.com/photos/3760868/pexels-photo-3760868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "pending",
        email: "emily.anderson@example.com",
        age: 31
    },
    {
        id: 8,
        username: "Lucas Martinez",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "lucas.martinez@example.com",
        age: 27
    },
    {
        id: 9,
        username: "Isabella Thompson",
        img: "https://images.pexels.com/photos/2221875/pexels-photo-2221875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "isabella.thompson@example.com",
        age: 33
    },
    {
        id: 10,
        username: "Liam Rodriguez",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
        status: "passive",
        email: "liam.rodriguez@example.com",
        age: 39
    },
  ];