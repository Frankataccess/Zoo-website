const Footer = () => {
return (
    <div className="bg-gray-800 text-white ">
        {/* Contact Information */}
        <div>
        <h2 className="text-lg font-semibold mb-2 sticky">Contact Information</h2>
        <p className="text-xl font-semibold pb-5">029154070951</p>
        </div>

        {/* Opening Times */}
        <div>
        <h2 className="text-lg font-semibold mb-2">Opening Times</h2>
        <ul>
            <li>Monday: 9 AM - 5 PM</li>
            <li>Tuesday: 9 AM - 5 PM</li>
            <li>Wednesday: 9 AM - 5 PM</li>
            <li>Thursday: 9 AM - 5 PM</li>
            <li>Friday: 9 AM - 5 PM</li>
            <li>Saturday: 9 AM - 5 PM</li>
        </ul>
        </div>
    </div>
);
};

export default Footer;
