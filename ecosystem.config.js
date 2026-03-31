module.exports = {
      apps : [
          {
             name : "cloud-sql-auth-proxy",
             script: "./cloud-sql-proxy project-219b5172-0644-4a7f-87b:asia-southeast1:mysql-vm project-219b5172-0644-4a7f-87b:asia-southeast1:postgres-vm --private-ip",
              log_files: "./logs/cloud-sql-proxy.log",
          },
            {
              name   : "student-service",
              script : "java -jar student-service/target/Student-Service-1.0.0.jar",
              log_files: "./logs/student-service.log",
              instances :   2
            },
            {
              name   : "program-service",
              script : "java -jar program-service/target/Program-Service-1.0.0.jar",
                log_files: "./logs/program-service.log",
                instances :   2
            },
            {
              name   : "enrollment-service",
              script : ".java -jar enrollment-service/target/Enrollment-Service-1.0.0.jar",
                log_files: "./logs/enrollment-service.log",
                instances :   2
            }
      ]
}
