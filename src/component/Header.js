
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav>
                    <ul className="left">
                        <a href="">
                            <li>브랜드</li>
                        </a>
                        <a href="">
                            <li>상품</li>
                        </a>
                        <a href="">
                            <li>진심후기</li>
                        </a>
                    </ul>
                    <h1>
                        <a href="">
                            <img src="asset/img/logo.png" alt="" />
                        </a>
                    </h1>
                    <ul className="right">
                        <a href="">
                            <li>코코이야기</li>
                        </a>
                        <a href="">
                            <li>이벤트</li>
                        </a>
                        <a href="">
                            <li>고객센터</li>
                        </a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;