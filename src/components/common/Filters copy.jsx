const Filter = () => {
    return(
        <div>
            <div>
                <h4>client</h4>
                <label>
                    <input type="checkbox" value="One Inc"/>
                    One Inc
                </label>
                <label>
                    <input type="checkbox" value="Slide"/>
                    Slide
                </label>
                <label>
                    <input type="checkbox" value="Metaz"/>
                    Metaz
                </label>
            </div>

            <div>
                <h4>Status</h4>
                <label>
                    <input type="checkbox" value="Active"/>
                    Active
                </label>
                <label>
                    <input type="checkbox" value="InActive"/>
                    InActive
                </label>
            </div>
        </div>
    )
}

export default Filter;