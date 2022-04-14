import Header from "../components/Header"

export default function MainLayout({ children }) {
  return (
    <>
      <div className="main-container">
        <Header />
        {children}
      </div>
    </>
  )
}
