import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  listPlantsByPieceIdAndYearId,
  setModalType,
  setPatternPlanting,
  setPlantationDirection,
  setPlantForEdit,
} from "../../../redux/actions";
import { NavLink, Link, useLocation, useHistory } from "react-router-dom";
import Spinner from "../../../components/ui/spinner/spinner";
import information from "../../../assets/imges/information.svg";
import Modal from "../../../components/ui/modal/modal";
import PlantationInfo from "../../../routes/pages/PlantationInfo";

const Plants = (props) => {
  let location = useLocation();
  let { plants, modalType, loading } = props;
  plants = Object.values(plants);
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [filterPlants, setFilterPlants] = useState([]);

  useEffect(() => {
    props.listPlantsByPieceIdAndYearId(props.pieceId, props.yearId);
  }, [props.yearId]);

  // SearchInput
  const searchFilter = (e) => {
    const itemData = plants.filter((item) => {
      const valueInput = item.name.toUpperCase();
      const textSeach = e.target.value.toUpperCase();
      if (valueInput.indexOf(textSeach) > -1) {
        return item;
      }
    });
    setFilterPlants(itemData);
    setSearch(e.target.value);
  };
  const onShowInformation = (item) => {
    setSelectedItem(item);
    props.setModalType("plants");
    // props.getListFilesByPlantationId(item.id)
  };

  const itemClickHandler = (event) => {
    props.setPatternPlanting(event.target.value);
    // let newList = [...props.plantationDirection];
    // newList.push(props.plants[event.target.value]);
    // props.setPlantationDirection(newList);
  };
  let history = useHistory();
  const q = new URLSearchParams(history.location.search);
  const specialityId = q.get("specialityId") || q.get("speciality_id");
  return (
    <div className="agricultureـindustry">
      <input type="text" placeholder="جستجو" />
      {loading ? (
        <Spinner />
      ) : (
        <ul className="farms">
          {plants.map((item) => (
            <li key={item.id} onClick={() => props.setPatternPlanting(item.id)}>
              <NavLink
                to={`/map?step=8&plantId=${item.plantation_id}&yearId=${props.yearId}&speciality_id=${specialityId}`}
              >
                <div className="name">
                  <p>
                    {item.crop_name}( {item.variety_name})
                  </p>
                  <img
                    src={information}
                    alt={information}
                    onClick={(e) => {
                      e.preventDefault();
                      onShowInformation(item);
                    }}
                  />
                </div>
                <p className="details">
                  <span className="farms_count">{item.planting_date}</span>
                  <span className="text-area">{item.area} هکتار </span>
                </p>
                <p class="operation_edit">
                  <Link to={`/editPlant/${item.id}/${location.search}`}>
                    <span
                      className="edit_plant"
                      onClick={() =>
                        props.setPlantForEdit(item.plantation_id, item.id)
                      }
                    >
                      ویرایش
                    </span>
                  </Link>
                  <span className="remove_plant">حذف</span>
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {modalType === "plants" ? (
        <Modal>
          <PlantationInfo selectedItem={selectedItem} />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = ({
  plants: { loading, plants },
  modalType: { modalType: modalType },
  plantationState: { plantationDirection },
}) => ({
  plants,
  loading,
  modalType,
  plantationDirection,
});

const mapDispatchToProps = (dispatch) => {
  return {
    listPlantsByPieceIdAndYearId: (first, second) =>
      dispatch(listPlantsByPieceIdAndYearId(first, second)),
    setModalType: (first) => dispatch(setModalType(first)),
    setPatternPlanting: (id) => dispatch(setPatternPlanting(id)),
    setPlantationDirection: (drcList) =>
      dispatch(setPlantationDirection(drcList)),
    setPlantForEdit: (pId, patternId) =>
      dispatch(setPlantForEdit(pId, patternId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Plants);
