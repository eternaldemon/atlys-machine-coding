const NotFound: React.FC = () => {
    return <div className="flex flex-col text-center gap-3">
        <h2 className="text-lg">OOPS! Unexpected Error Occured</h2>
        <p className="text-3xl">404 - Page Not Found!</p>
        <span>Note: We are working on it. Please wait for some time and try again.</span>
    </div>
}

export default NotFound;