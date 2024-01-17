{

    const bros1: string[] = ['Ashik', 'shamim', 'forhad'];
    const bros2: string[] = ['Rafi', 'Kafi', 'Jilafi'];
    bros1.push(...bros2);


    const mentors1 = {
        typescript: 'Mezba',
        redux: 'MIr',
        dbms:'Mizan',
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        Cloud:'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    const greetFrinds = (...friends:string[]) => {
        // console.log(`hi ${frnd1} ${frnd2} ${frnd3}`);

        friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
    }

    greetFrinds('Abul','Kabul','babul')

















}