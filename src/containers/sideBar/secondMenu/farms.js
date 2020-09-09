import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../../../components/ui/spinner/spinner";
import information from "../../../assets/imges/information.svg";
import {
  listFarmsByCompanyId,
  getListFilesByPlantationId,
  setModalType,
} from "../../../redux/actions";
import Modal from "../../../components/ui/modal/modal";
import PlantationInfo from "../../../routes/pages/PlantationInfo";

const Farms = (props) => {
  let { loading, farms, modalType } = props;
  farms = farms ? Object.values(farms) : [];
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [filterFarms, setFilterFarms] = useState([]);
  useEffect(() => {
    props.listFarmsByCompanyId(props?.companyId);
  }, []);

  // SearchInput
  const searchFilter = (e) => {
    const itemData = farms.filter((item) => {
      const valueInput = item.name.toUpperCase();
      const textSeach = e.target.value.toUpperCase();
      if (valueInput.indexOf(textSeach) > -1) {
        return item;
      }
    });
    setFilterFarms(itemData);
    setSearch(e.target.value);
  };

  const onShowInformation = (item) => {
    setSelectedItem(item);
    props.setModalType("");
    setTimeout(() => {
      props.setModalType("farms");
    }, 500);
    // props.getListFilesByPlantationId(item.id)
  };

  return (
    <div className="agricultureـindustry">
      <input
        type="text"
        placeholder="جستجو"
        onChange={searchFilter}
        value={search}
      />

      <ul>
        {search ? (
          <FarmsRows data={filterFarms} onShowInformation={onShowInformation} />
        ) : loading ? (
          <Spinner />
        ) : (
          <FarmsRows data={farms} onShowInformation={onShowInformation} />
        )}
      </ul>

      {modalType == "farms" ? (
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
  farms: { loading, farms, selectedItem },
  modalType: { modalType: modalType },
}) => ({
  loading,
  farms,
  selectedItem,
  modalType,
});

export default connect(mapStateToProps, {
  listFarmsByCompanyId,
  getListFilesByPlantationId,
  setModalType,
})(Farms);

const FarmsRows = ({ data, onShowInformation }) =>
  data?.map((item) => (
    <li key={item.id}>
      <NavLink to={`/map?step=3&farmId=${item.id}`}>
        <span className="name">
          <span>{item.name}</span>
          <img
            src={information}
            alt="information"
            onClick={(e) => {
              e.preventDefault();

              onShowInformation(item);
            }}
          />
        </span>
        <span className="details">
          <span className="farms_count">{item.section_count} بخش</span>
          <span className="text-area">{item.area} هکتار</span>
        </span>
      </NavLink>
    </li>
  ));
