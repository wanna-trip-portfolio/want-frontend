import React, {useState} from 'react';
import "./TestComponent.css"
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel, FormLabel,
    Grid,
    Link, Radio, RadioGroup, styled,
    TextField,
    Typography
} from "@mui/material";

interface JoinDto {
    id: string,
    password: string,
    name: string,
    gender: string,
    birth: string,
    email: string,
    phoneNumber: string,
}


export const JoinForm: React.FC = () => {
    const nullCheck = <T extends any>(input: any): T => (input as unknown as T);
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




    // 디바운싱
    const [idValidTimer, setIdValidTimer] = useState(0); // 디바운싱 타이머

    const onChangeInputs = (event : React.ChangeEvent<HTMLInputElement>) => {
        setMemberState({ // client data는 바로 변경
            member: memberData,
        });

        // 디바운싱 - 마지막 호출만 적용 (put api)
        if (timer) {
            console.log('clear timer');
            clearTimeout(timer);
        }
        const newTimer = setTimeout(async () => {
            try {
                await updateMemberById(match.params.id, memberData);
            } catch (e) {
                console.error('error', e);
            }
        }, 800);
        setTimer(newTimer);
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
                                placeholder="6자 이상"

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