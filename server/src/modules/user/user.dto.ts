import { IsString, IsEmail, IsInt } from 'class-validator';

class CreateUserDto {
    @IsString()
    public username: string;

    @IsString()
    public password: string;

    @IsString()
    public firstName: string;

    @IsString()
    public middleName: string;

    @IsString()
    public lastName: string;

    @IsEmail()
    public email: string;

    @IsInt()
    public role: number;

}

export default CreateUserDto;