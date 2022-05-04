import { useSelector, useDispatch } from 'react-redux';
import { setList } from 'store/features/info/infoSlice';
import notionClient from 'libs/NotionClient';

function useInfo() {
  const info = useSelector((state) => state.info.list);
  const dispatch = useDispatch();

  async function fetchInfo() {
    const list = await notionClient.getPasswordList();
    if (!list) return;
    parsePasswordList(list.results);

    function parsePasswordList(passwordList) {
      function parseTextByType() {
        const args = Array.prototype.slice.call(arguments);
        return args.reduce((acc, arg) => {
          const { type } = arg;

          if (arg[type].length !== 0) {
            acc.push(arg[type][0].text.content);
          }
          return acc;
        }, []);
      }

      const parsedPasswordList = passwordList.reduce(
        (parsedPasswordList, currentItem) => {
          const { properties, id } = currentItem;
          const { ID, PASSWORD, SITE } = properties;
          const result = parseTextByType(ID, PASSWORD, SITE);
          const obj = {
            notionId: id,
            id: result[0],
            password: result[1],
            site: result[2],
          };
          if (result[0] !== undefined) parsedPasswordList.push(obj);
          return parsedPasswordList;
        },
        [],
      );
      dispatch(setList(parsedPasswordList));
    }
  }

  return {
    info, 
    fetchInfo,
  }
}

export default useInfo;
