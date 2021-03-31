import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderComp from '../../components/HeaderComp/HeaderComp';
import UserButtonComp from '../../components/ButtonComp/UserButtonComp';
import styles from './index.module.css';

const UserRegisterSuccess = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(function () {
      history.push('/login');
    }, 3000);
  });
  return (
    <div className={styles.success_box}>
      <HeaderComp headertitle="회원가입 완료" />
      <div className={styles.success_title}>회원가입 완료</div>
      <div className={styles.go_login_box}>
        <UserButtonComp textValue="로그인 하러가기" handleClick="login"></UserButtonComp>
      </div>
    </div>
  );
};

export default UserRegisterSuccess;
