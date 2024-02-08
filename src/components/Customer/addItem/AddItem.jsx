import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Media,
  Table,
} from "reactstrap";

const AddItem = () => {
  return (
    <>
      <Container className="mt-5" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-first-name"
                            placeholder="#OrderNumber"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-last-name"
                            placeholder="User name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Order information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Material Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-address"
                            placeholder="Material Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Width
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            placeholder="Width"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Height
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-country"
                            placeholder="Height"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Quantity
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="Quantity"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <Button
                    className="btn-neutral btn-icon mr-4"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src="https://www.svgrepo.com/show/170952/add-button.svg"
                        // src={
                        //   require("../../assets/img/icons/common/github.svg")
                        //     .default
                        // }
                      />
                    </span>
                    <span className="btn-inner--text">Add Item</span>
                  </Button>
                  <hr className="my-4" />
                  {/* Dark table */}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>{" "}
      <br /> <br /> <br />
      <Container className="mt--7" fluid>
        {/* Table */}
        {/* <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Completion</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Argon Design System
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,500 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        pending
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip742438047"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip742438047"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip941738690"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip941738690"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip804044742"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip804044742"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip996637554"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip996637554"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">60%</span>
                        <div>
                          <Progress
                            max="100"
                            value="60"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Angular Now UI Kit PRO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$1,800 USD</td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip746418347"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip746418347"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip102182364"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip102182364"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip406489510"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip406489510"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip476840018"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip476840018"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">Black Dashboard</span>
                        </Media>
                      </Media>
                    </th>
                    <td>$3,150 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-danger" />
                        delayed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip753056318"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip753056318"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip441753266"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip441753266"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip188462246"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip188462246"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip621168444"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip621168444"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">72%</span>
                        <div>
                          <Progress
                            max="100"
                            value="72"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            React Material Dashboard
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$4,400 USD</td>
                    <td>
                      <Badge color="" className="badge-dot">
                        <i className="bg-info" />
                        on schedule
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip875258217"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip875258217"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip834416663"
                          onClick={(e) => e.preventDefault()}
                        >
                        
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip834416663"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip372449339"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip372449339"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip108714769"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip108714769"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">90%</span>
                        <div>
                          <Progress
                            max="100"
                            value="90"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <a
                          className="avatar rounded-circle mr-3"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <Media>
                          <span className="mb-0 text-sm">
                            Vue Paper UI Kit PRO
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>$2,200 USD</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-success" />
                        completed
                      </Badge>
                    </td>
                    <td>
                      <div className="avatar-group">
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip664029969"
                          onClick={(e) => e.preventDefault()}
                        >
                          
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip664029969"
                        >
                          Ryan Tompson
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip806693074"
                          onClick={(e) => e.preventDefault()}
                        >
                         
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip806693074"
                        >
                          Romina Hadid
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip844096937"
                          onClick={(e) => e.preventDefault()}
                        >
                          
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip844096937"
                        >
                          Alexander Smith
                        </UncontrolledTooltip>
                        <a
                          className="avatar avatar-sm"
                          href="#pablo"
                          id="tooltip757459971"
                          onClick={(e) => e.preventDefault()}
                        >
                          
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip757459971"
                        >
                          Jessica Doe
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">100%</span>
                        <div>
                          <Progress
                            max="100"
                            value="100"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
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
        </Row> */}
        {/* Dark table */}
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Item's</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Material Name</th>
                    <th scope="col">Width</th>
                    <th scope="col">Height</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          combustion chamber
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>-</td>
                    <td>-</td>
                    <td>5</td>
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
                                src="https://icon-library.com/images/icon-edit/icon-edit-11.jpg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/1200px-Delete-button.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td>                 
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          cylinder head
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>-</td>
                    <td>-</td>
                    <td>15</td>
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
                                src="https://icon-library.com/images/icon-edit/icon-edit-11.jpg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/1200px-Delete-button.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td>                 
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          pistons
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>-</td>
                    <td>-</td>
                    <td>20</td>
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
                                src="https://icon-library.com/images/icon-edit/icon-edit-11.jpg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/1200px-Delete-button.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td>                 
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          crankshaft
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>-</td>
                    <td>-</td>
                    <td>35</td>
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
                                src="https://icon-library.com/images/icon-edit/icon-edit-11.jpg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/1200px-Delete-button.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td>                 
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          camshaft
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>-</td>
                    <td>-</td>
                    <td>55</td>
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
                                src="https://icon-library.com/images/icon-edit/icon-edit-11.jpg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/1200px-Delete-button.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td>                 
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                          timing chain
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>-</td>
                    <td>-</td>
                    <td>60</td>
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
                                src="https://icon-library.com/images/icon-edit/icon-edit-11.jpg"
                              />
                            </span>
                          </Button>
                          <Button
                            className="btn-neutral btn-icon mr-4"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <span className="btn-inner--icon">
                              <img
                                alt="..."
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/1200px-Delete-button.svg.png"
                              />
                            </span>
                          </Button>
                        </div>
                    </td>                 
                  </tr>
             
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        <br /> 
        <Button
                    className="btn-neutral btn-icon mr-4"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="btn-inner--icon">
                      <img
                        alt="..."
                        src="https://www.svgrepo.com/show/30442/send.svg"
                      />
                    </span>
                    <span className="btn-inner--text">Send</span>
                  </Button>
      </Container>
    </>
  );
};

export default AddItem;
