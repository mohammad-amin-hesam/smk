import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Spinner from "../../../components/ui/spinner/spinner";
import { listFieldsByFarmId } from "../../../redux/actions";

export const Field = (props) => {
  const [search, setSearch] = useState("");
  const [filterFields, setFilterFields] = useState([]);
  const { loading } = props;
  let { fields } = props;
  fields = Object.values(fields);
  useEffect(() => {
    props.listFieldsByFarmId(props?.farmId);
  }, []);

  // SearchInput
  const searchFilter = (e) => {
    const itemData = fields.filter((item) => {
      const valueInput = item.name.toUpperCase();
      const textSeach = e.target.value.toUpperCase();
      if (valueInput.indexOf(textSeach) > -1) {
        return item;
      }
    });
    setFilterFields(itemData);
    setSearch(e.target.value);
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
          <FieldsRows data={filterFields} farmId={props.farmId} />
        ) : loading ? (
          <Spinner />
        ) : (
          <FieldsRows data={fields} farmId={props.farmId} />
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ fields: { loading, fields } }) => ({
  loading,
  fields,
});

export default connect(mapStateToProps, { listFieldsByFarmId })(Field);

const FieldsRows = ({ data, farmId }) =>
  data?.map(({ id, name }) => (
    <li key={id}>
      <NavLink to={`/map?step=4&farmId=${farmId}&specialityId=${id}`}>
        <div className="name">
          <span>{name}</span>
        </div>
      </NavLink>
    </li>
  ));
