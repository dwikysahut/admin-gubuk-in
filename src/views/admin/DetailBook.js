import React, { Component } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  CardBody,
  Button,
  Badge,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { URL_API } from "utils/http";

class DetailBooks extends Component {
  render() {
    const StatusBadge = ({ color, text }) => {
      return (
        <Badge color={color} pill>
          {text}
        </Badge>
      );
    };

    const book = this.props.location.state[0];
    const detailBook = (
      <CardBody>
        {/* Title */}
        <h1 className="text-info capitalize">{book.title}</h1>

        {/* Category */}
        <h4 className="capitalize">{book.category}</h4>

        {/* Author */}
        <h4 className="capitalize">
          <em>{book.author}</em>
        </h4>

        {/* Price */}
        <h4>
          {book.price === 0 && <StatusBadge color={"success"} text={"FREE"} />}
          {book.price !== 0 && (
            <StatusBadge color={"primary"} text={`Rp. ${book.price} ,-`} />
          )}
        </h4>

        {/* Status */}
        <h4>
          {book.status === "waiting" && (
            <StatusBadge color={"info"} text={book.status} />
          )}
          {(book.status === "accepted" || book.status === "Accepted") && (
            <StatusBadge color={"success"} text={book.status} />
          )}
          {book.status === "rejected" && (
            <StatusBadge color={"danger"} text={book.status} />
          )}
        </h4>

        {/* Description */}
        <p>{book.description}</p>

        {/* Button Accepted/Rejected */}
        <Row
          style={{
            width: "100%",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          {book.status === "waiting" && (
            <Row>
              <Button color="success">Accept</Button>
              <Button color="danger">Reject</Button>
            </Row>
          )}
        </Row>

        {/* PDF */}
        <iframe
          style={{ width: "100%", height: "100vh" }}
          title="have fun"
          src={`${URL_API}/ebook/${book.file_ebook}`}
          key="45"
        ></iframe>
      </CardBody>
    );

    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row
                    onClick={() => this.props.history.push("/admin/index")}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="mb-0 ml-4">
                      <i className=" ni ni-bold-left" />
                    </div>
                    <h3 className="mb-0 ml-4">Dashboard</h3>
                  </Row>
                </CardHeader>
                {detailBook}
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default DetailBooks;
