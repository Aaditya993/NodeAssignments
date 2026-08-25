const fs = require('fs');

// The initial content required for Task 1
const initialContent = "Name:Aaditya Bhosale\nCourse: Full Stack Development\nTechnology: Node.js\n";


fs.writeFile('student.txt', initialContent, (err) => {
    if (err) throw err;
    console.log('File created successfully'); 

    // Task 2: Read Student Information using fs.readFile()
    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err); 
            return;
        }
        console.log('\nFile Content');
        console.log(data); 
        console.log('---\n');

        // Task 3: Update Student Information using fs.appendFile()
        const additionalContent = "Experience: 1 Year\nCity: Nerul\n";
        fs.appendFile('student.txt', additionalContent, (err) => {
            if (err) throw err;
            console.log('Data updated successfully'); 

            // Task 4: Manage File Name using fs.rename()
            fs.rename('student.txt', 'studentDetails.txt', (err) => {
                if (err) throw err;
                console.log('File successfully renamed to studentDetails.txt'); 

                // Task 5: Remove File using fs.unlink()
                // fs.unlink('studentDetails.txt', (err) => {
                //     if (err) {
                //         console.error('Error deleting file:', err); 
                //         return;
                //     }
                //     console.log('File deleted successfully');
                // });
            });
        });
    });
});