<div align="center">
<h1 align="center">MyFuelPal - v2</h1>

  <p align="center">
    "MyFuelPal" is an application to track your hisotry of refulling, allows you to assign the fuelnote to vehicle.  
    <p align="center">
      This is the second version of MyFuelPal, built using a different tech stack — notably switching to a different database and utilizing the Spring Boot framework along with Spring Security and JWT-based authentication.
    </p>
  </p>
</div>

## Tech Stack
![HTML5](https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff)
![CSS3](https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=css3)
![SASS](https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=ffffff)
![JavaScript](https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=000000)

![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)
![MariaDB](https://img.shields.io/badge/-MariaDB-003545?style=flat-square&logo=mariadb&logoColor=ffffff)
![Springboot](https://img.shields.io/badge/-Springboot-6DB33F?style=flat-square&logo=spring&logoColor=ffffff)
![Springsecurity](https://img.shields.io/badge/-SpringSecurity-6DB33F?style=flat-square&logo=springsecurity&logoColor=ffffff)

## Installation

Clone the repository 
```
git clone https://github.com/Meikelele/my-fuel-pal.git
```
Go to the proper directory
```
cd MyFuelPal
```
Run docker-compose 
```
docker-compose up --build -d
```

## Functionalities
- [ ] **Add your car**  
  Add your vehicle to your account
- [ ] **Add your fuel note**  
  Add and manage fuel notes for your car
- [ ] **Overview dashboard**  
  View all your vehicles and fuel notes in one place
- [ ] **Customize your profile**  
  Change your profile avatar and personal information
- [ ] **Account settings**  
  - Change email  
  - Change username  
  - Change password  
  - Clear all cookies

## Demo Desktop & Mobile
![Opera Zrzut ekranu_2025-04-22_144139_localhost](https://github.com/user-attachments/assets/a679cf6d-1a9e-4ca4-b0ec-489b18aa3dc6)

### Sign up
![Zrzut ekranu 2025-04-22 o 14 44 32](https://github.com/user-attachments/assets/a1e04b64-03a1-4288-a7d3-4fa87722b5dd)

### Login
![Zrzut ekranu 2025-04-22 o 14 44 45](https://github.com/user-attachments/assets/c954a91b-021a-4ff6-bbd8-fbcc66791114)

### Home page
![Zrzut ekranu 2025-04-22 o 14 44 54](https://github.com/user-attachments/assets/f4397748-ef97-426e-830b-b9959fa75c4b)

### Adding a car
![Zrzut ekranu 2025-04-22 o 14 45 56](https://github.com/user-attachments/assets/4bc7f0e2-124a-4184-aa50-1213cf7bfceb)


### Adding a fuelnote
![Zrzut ekranu 2025-04-22 o 14 46 47](https://github.com/user-attachments/assets/27b6fc93-8609-4c96-a3a2-378cd5a3d7ad)

### Home page again
![Zrzut ekranu 2025-04-22 o 14 46 57](https://github.com/user-attachments/assets/17d28259-0740-4fee-bcc7-bc0cd5a176d3)
![Zrzut ekranu 2025-04-22 o 14 48 35](https://github.com/user-attachments/assets/c94680c2-6d61-438d-9313-84763d69e726)
![Zrzut ekranu 2025-04-22 o 14 48 17](https://github.com/user-attachments/assets/4bddc241-1203-4c72-9888-25bfbe3982b0)

### Your profile
![Zrzut ekranu 2025-04-22 o 14 47 05](https://github.com/user-attachments/assets/a280de4b-d13c-4865-8c4c-7dffb01233d2)
![Zrzut ekranu 2025-04-22 o 14 48 42](https://github.com/user-attachments/assets/63fd46d2-8157-4b11-8bd6-32f2aa592e2f)


### Settings
![Zrzut ekranu 2025-04-22 o 14 47 12](https://github.com/user-attachments/assets/1fa77b20-16ce-45b5-a2a2-c511cd102e12)
![Zrzut ekranu 2025-04-22 o 14 48 47](https://github.com/user-attachments/assets/01ccbb39-bd40-4b6c-81df-cfe784506b95)




## Database description

### One-to-Many Relationship between Vehicles and Fuelnotes:

- **vehicles** table has a primary key `id`.
- **fuelnotes** table has a foreign key `vehicle_id` referencing the `id` in the **vehicles** table.
- This implies that one vehicle can have multiple fuelnotes.

### One-to-Many Relationship between Users and Vehicles:

- **Users** table has a primary key `id`.
- **Vehicles** table has a foreign key `is_user` referencing the `id` in the **vehicles** table.
- This implies that one user can be associated with multiple vehicles.

### One-to-One Relationship between Users and Role:

- **users** table has a primary key `id`.
- **roles** table has a foreign key `user_id` referencing the `id` in the **users** table.
- This implies that each user has a unique role, forming a one-to-one relationship.

### ERD DIAGRAM
![ERD](https://github.com/user-attachments/assets/5e6e4bac-04e5-47ff-8499-886733673f42)
![ERD_MFP](https://github.com/user-attachments/assets/f0800669-7450-4359-a398-a21fae757c3d)


