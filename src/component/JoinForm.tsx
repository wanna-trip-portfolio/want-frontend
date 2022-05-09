import React, {useCallback, useState} from 'react';
import "./TestComponent.css"
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel, FormLabel,
    Grid,
    Link, Radio, RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import {Util} from "../common/Util";
import {useInputValidate, VALID_TYPE} from "../common/Validation";

interface JoinDto {
    id: string,
    password: string,
    name: string,
    gender: string,
    birth: string,
    email: string,
    phoneNumber: string,
}

const nullCheck = <T extends any>(input: any): T => (input as unknown as T);

export const JoinForm: React.FC = () => {
    const getFormData = (e: React.FormEvent<HTMLFormElement>): JoinDto => {
        const data = new FormData(e.currentTarget);
        return {
            id: nullCheck<string>(data.get('id')),
            password: nullCheck<string>(data.get('password')),
            name: nullCheck<string>(data.get('name')),
            gender: nullCheck<string>(data.get('gender')),
            birth: nullCheck<string>(data.get('birth')),
            email: nullCheck<string>(data.get('email')),
            phoneNumber: nullCheck<string>(data.get('phoneNumber')),
        }
    }


    const [id, setId] = useState('');
    const handleChangeId = useInputValidate(id, setId, /[a-z|A-Z|0-9]/g);

    const [idTimer, setIdTimer] = useState<number>(0);

    const [nickName, setNickName] = useState<string>('');

    const handleChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const lastInput = value.charAt(value.length - 1);
        if (VALID_TYPE.EN_KR_NUM.test(lastInput) || value === '') setNickName(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const joinDto = getFormData(e);
        console.log(joinDto);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography component="h1" variant="h5">
                    회원가입
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required={false}
                                fullWidth
                                name="id"
                                label="아이디"
                                placeholder="6자 이상 12자 이하"
                                onChange={handleChangeId}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                type="password"
                                placeholder="비밀번호"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={true}
                                required
                                fullWidth
                                name="password-confirm"
                                type="password"
                                placeholder="비밀번호 확인"
                                helperText={true && '비밀번호가 다릅니다.'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="nickName"
                                placeholder="닉네임"
                                value={nickName}
                                onChange={handleChangeNickName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="name"
                                placeholder="이름"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormLabel
                                id="form-gender"
                                error={true}
                            >성별</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="form-gender"
                                name="gender"
                            >
                                <FormControlLabel value="male" control={<Radio/>} label="남자"/>
                                <FormControlLabel value="female" control={<Radio/>} label="여자"/>
                            </RadioGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="birth"
                                placeholder="생년월일 19921001"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="email"
                                placeholder="이메일"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="phoneNumber"
                                placeholder="연락처"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="약관 동의 Bro?"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        disabled={false}
                    >
                        가입
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                이미 계정 있으면, 로그인하세욘
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}