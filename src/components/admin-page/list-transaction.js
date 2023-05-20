import NavLog from "../Navbar/navbarLogin"
import Footer from "../Footer/footer"
import Image from 'react-bootstrap/Image'
import SearchIcon from "../images/search.png"


export default function ListTransaction() {
    return (
        <div className="bgColor">
            <NavLog />
            <div className="container ">
                <p className="fs-3 fw-bold mt-5">Incoming Transaction</p>
                <table class="table bg-white mb-5">
                    <thead className="table-list-transaction" >
                        <tr >
                            <th scope="col">No</th>
                            <th scope="col">Users</th>
                            <th scope="col">Trip</th>
                            <th scope="col">Bukti Transfer</th>
                            <th scope="col">Status Payment</th>
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>1</td>
                            <td>C Ronaldo</td>
                            <td>6D/4N Fun tassie Vacation Sydney</td>
                            <td>BCA</td>
                            <td>Pending</td>
                            <td>
                                <Image src={SearchIcon} />

                            </td>
                        </tr>
                        <tr>

                            <td>1</td>
                            <td>Jihyo</td>
                            <td>6D/4N Fun tassie Vacation Sydney</td>
                            <td>BSI</td>
                            <td>Approve</td>
                            <td>
                                <Image src={SearchIcon} />

                            </td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>
            <Footer />
        </div>
    )
}