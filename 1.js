function myBiodata(nama,umur){ //Function with 2 Parameters
    return {
        name: nama, // String, parameter pertama
        age: umur, // Number, parameter kedua
        address: 'perum jatihurip blok 7 no 102', //String Alamat
        hobbies: ['olahraga', 'Mendengarkan Musik'], //Array
        is_married: false, //Boolean
        list_school: [{
            
            name: "SMA Negeri 1 cimalaka",
            year_in: "2012",
            year_out: "2015",
            major: "IPA"

        },
        {
            name: 'Universitas Padjajaran',
            year_in: '2015',
            year_out: '2018',
            major: 'komunikasi bisnis'

        }], //Array of Object with key
        skills: [{
            skill_name: 'communications',
            level: 'intermediate'
        },{
            skill_name: 'cooking',
            level: 'intermediate'
        }], // Array of Object with key
        interest_in_coding: true, // Boolean
    }
}
let biodata = myBiodata('Haninda Risbayanti Sukma', 23);
console.log(JSON.stringify(biodata));