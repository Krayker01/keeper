function Footer({ className }) {
    const thisYear = new Date().getFullYear();
    return <footer><p className={className}>Copyright ©{thisYear}</p></footer>;
};
export default Footer;