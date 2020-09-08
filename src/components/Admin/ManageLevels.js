import React, { Component } from "react";
import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AdminLayout from "./AdminLayout";
import LevelDisplay from "./LevelDisplay";

import { withFirebase } from "upe-react-components";

import Loader from "../Loader";
import Error from "../Error";
import { LevelAdder } from "./EditLevel";
import { asyncForEach } from "../../util/helper.js";
import { Container } from "../../styles/global";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const StyledDiv = styled.div`
  text-align: right;
`;

const StyledCol = styled(Col)`
  padding: 10px 10px 10px 10px;
  width: 200px;
`;

const StyledDivCard = styled.div`
  width: 90%;
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 15px;
  text-align: center;
  &:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    transition: all 0.3s linear;
  }

  a {
    color: white;
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
  }

  a[aria-current="page"] {
    color: ${(props) => props.theme.palette.mainBrand};
  }
`;

class ManageLevels extends Component {
  _initFirebase = false;
  state = {
    levelConfig: null,
    loading: true,
    error: null,
    questionList: null,
    questionMap: null,
    addLevel: false,
  };
  unsub = null;

  componentDidMount() {
    if (this.props.firebase && !this._initFirebase) this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.firebase && !this._initFirebase) this.loadData();
  }

  componentWillUnmount() {
    if (typeof this.unsub === "function") this.unsub();
  }

  updatePage = () => {
    this.setState({ addQuestion: false });
    this.loadData();
  };

  loadData = async () => {
    this._initFirebase = true;
    const doc = await this.props.firebase.levelConfig().get();

    if (doc.exists) {
      const levelConfig = doc.data();
      this.setState({
        levelConfig,
      });
    } else {
      this.setState({
        error: "No levelConfig",
        loading: false,
      });
    }

    this.props.firebase
      .questions()
      .get()
      .then((querySnapshot) => {
        const questionList = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        this.setState(
          {
            questionList,
          },
          () => {
            console.log("Data Loaded");
            this.sortData();
          }
        );
      });
  };

  sortData = async () => {
    const { questionList } = this.state;
    var questionMap = {};

    await asyncForEach(questionList, async (item, index) => {
      questionMap[item.id] = item.name;
    });

    this.setState({ loading: false, questionMap });
  };

  toggleAdd = () => {
    this.setState({ addLevel: !this.state.addLevel });
  };

  render() {
    const {
      loading,
      error,
      levelConfig,
      addLevel,
      questionMap,
      questionList,
    } = this.state;

    if (error) return <Error error={error} />;
    if (loading) return <Loader />;

    const AddLevel = () => {
      return (
        <Row>
          <StyledCol>
            <StyledDivCard>
              <h2>Add Level</h2>

              <Container flexdirection="column">
                <DndProvider
                  backend={HTML5Backend}
                  styled={{ textAlign: "center", itemAlign: "center" }}
                >
                  <LevelAdder
                    questionMap={questionMap}
                    firebase={this.props.firebase}
                    updateFunc={this.updateData}
                    levelConfig={levelConfig}
                    allQuestions={questionList}
                  />
                </DndProvider>
              </Container>
            </StyledDivCard>
          </StyledCol>
        </Row>
      );
    };

    return (
      <AdminLayout>
        <Container flexdirection="column">
          <h1> Interview Levels </h1>
          <br />
          <StyledDiv>
            <Button onClick={this.toggleAdd}>Add Interview Level</Button>
          </StyledDiv>
          <br />

          {addLevel && <AddLevel />}

          <br />

          <Row>
            {Object.entries(levelConfig).map((level) => (
              <LevelDisplay
                key={level[0]}
                levelName={level[0]}
                level={level[1]}
                updateFunc={this.updatePage}
                levelConfig={levelConfig}
                questionMap={questionMap}
                questionList={questionList}
              />
            ))}
          </Row>
        </Container>
      </AdminLayout>
    );
  }
}

export default withFirebase(ManageLevels);
