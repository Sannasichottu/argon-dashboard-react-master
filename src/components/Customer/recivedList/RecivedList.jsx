import React from "react";
import {
  Card,
  CardHeader,
  Container,
  Row,
  Media,
  Table,
  PaginationItem,
  PaginationLink,
  Pagination,
  CardFooter,
  Button,
} from "reactstrap";

const RecivedList = () => {
  return (
    <>
   
    <Container className="mt-3" fluid>
      {/* Table */}
       <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <h3 className="mb-0">Recived List</h3>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
              <tr>
                    <th scope="col">Order Number</th>
                    <th scope="col">Material Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Invoice</th>         
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>#022</td>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          combustion chamber
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>₹ 25,000</td>
                    <td>
                      <div className="d-flex align-items-center">
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eo_circle_green_white_arrow-down.svg/512px-Eo_circle_green_white_arrow-down.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td> 
                              
                  </tr>
                  <tr>
                    <td>#023</td>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          cylinder head
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>₹ 12,500</td>
                    <td>
                      <div className="d-flex align-items-center">
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eo_circle_green_white_arrow-down.svg/512px-Eo_circle_green_white_arrow-down.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td> 
                               
                  </tr>
                  <tr>
                    <td>#024</td>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          pistons
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>₹ 30,000</td>
                    <td>
                      <div className="d-flex align-items-center">
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eo_circle_green_white_arrow-down.svg/512px-Eo_circle_green_white_arrow-down.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td> 
                                   
                  </tr>
                  <tr>
                    <td>#25</td>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          crankshaft
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>₹ 10,000</td>
                    <td>
                      <div className="d-flex align-items-center">
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eo_circle_green_white_arrow-down.svg/512px-Eo_circle_green_white_arrow-down.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td> 
                               
                  </tr>
                  <tr>
                    <td>#026</td>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          camshaft
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>₹ 24,300</td>
                    <td>
                      <div className="d-flex align-items-center">
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eo_circle_green_white_arrow-down.svg/512px-Eo_circle_green_white_arrow-down.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td> 
                                 
                  </tr>
                  <tr>
                    <td>#027</td>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          timing chain
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>₹ 34,100</td>
                    <td>
                      <div className="d-flex align-items-center">
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Eo_circle_green_white_arrow-down.svg/512px-Eo_circle_green_white_arrow-down.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td>            
                  </tr>
             
                </tbody>
            </Table>
            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2 <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row> 
    
    </Container>
  </>
  )
}

export default RecivedList