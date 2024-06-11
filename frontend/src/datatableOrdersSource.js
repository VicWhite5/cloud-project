export const orderColumns =[
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 50 
    },
    {
        field:"vendor", 
        headerName:"Vendor Name", 
        width:200, 
    },
    {
        field:"client", 
        headerName:"Client Name", 
        width:200, 
    },
    {
        field:"service", 
        headerName:"Service Name", 
        width:220, 
    },
    {
        field:'price', 
        headerName:'Price', 
        width:100
    },
    {
        field:'dateO', 
        headerName:'Date Ordered', 
        width:150
    },
    {
        field:'dateB', 
        headerName:'Date Booked', 
        width:150
    }

];

//temporary data
export const orderRows = [
    {
      id: 1,
      service: "Change of pipeline",
      price: "1200",
      vendor: "ABC Plumbers",
      dateO: "3/4/2023",
      dateB: "3/4/2023",
      client: "Oriana Toubia"
    },
    {
        id: 2,
        service: "Install new windows",
        price: "1030",
        vendor: "ABC Windows",
        dateO: "3/2/2023",
        dateB: "3/2/2023",
        client: "John Smith"
      },
      {
        id: 3,
        service: "Replace old roof",
        price: "15000",
        vendor:"LMN Painting",
        dateO: "2/2/2023",
        dateB: "2/2/2023",
        client: "Emma Johnson"
      },
      {
        id: 4,
        service: "Paint exterior of house",
        price: "5000",
        vendor:"XYZ Roofing",
        dateO: "1/2/2023",
        dateB: "1/2/2023",
        client: "Michael Brown"
      },
      {
        id: 5,
        service: "Install new siding",
        price: "1000",
        vendor:"LMN Painting",
        dateO: "3/1/2023",
        dateB: "3/1/2023",
        client: "Sophia Lee"
      },
      {
        id: 6,
        service: "Install new fence",
        price: "5000",
        vendor: "UVW Fencing",
        dateO: "2/1/2023",
        dateB: "2/1/2023",
        client: "Daniel Wilson"
      },
      {
        id: 7,
        service: "Add new landscaping",
        price: "12000",
        vendor:"XYZ Roofing",
        dateO: "1/1/2023",
        dateB: "1/1/2023",
        client: "Emily Anderson"
      },
      {
        id: 8,
        service: "Install new patio",
        price: "5000",
        vendor: "LMN Painting",
        dateO: "1/1/2023",
        dateB: "1/1/2023",
        client: "Lucas Martinez"
      },
      {
        id: 9,
        service: "Install new deck",
        price: "1500",
        vendor: "UVW Fencing",
        dateO: "1/1/2023",
        dateB: "1/1/2023",
        client: "Isabella Thompson"
      },
      {
        id: 10,
        service: "Build new shed",
        price: "5000",
        vendor: "XYZ Roofing",
        dateO: "1/1/2023",
        dateB: "1/1/2023",
        client: "Liam Rodriguez"
      }
  ];