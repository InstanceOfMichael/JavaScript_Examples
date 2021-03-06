var dublintech = dublintech || {};

dublintech.dataAdapter = {
    adaptStudents : function (data) {
		var adaptedStudentsVar = {
			students:[]
		};
		
		jQuery.each(data.students, function(indx, originalStudent){
			var student = {
				name: originalStudent.firstName + " " + originalStudent.lastName,
				dateOfBirth: originalStudent.dateOfBirth,
				nationality: originalStudent.nationality
			};
			adaptedStudentsVar.students.push(student);
		});
		return adaptedStudentsVar;
	}
};