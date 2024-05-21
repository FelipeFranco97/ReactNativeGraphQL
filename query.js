import { FlatList, Text, View, StyleSheet } from 'react-native'
import { gql, useQuery } from '@apollo/client'

const DRIVERS_QUERY = gql`
  query {
    driversYearAndRound(year: "2023", round: 1) {
      name
      nationality
    }
  }
`

function Drivers() {
  const { data, loading, error } = useQuery(DRIVERS_QUERY)



  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Cargando...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          Error: {error.message}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pilotos F1 Año: 2023
      </Text>
      <FlatList
        data={data.driversYearAndRound}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.name} - {item.nationality}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
        style={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 16,
      color: '#333',
    },
    list: {
      width: '100%',
    },
    item: {
      backgroundColor: '#fff',
      padding: 16,
      marginVertical: 8,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    itemText: {
      fontSize: 18,
      color: '#333',
    },
    infoText: {
      fontSize: 20,
      color: '#333',
      textAlign: 'center',
      marginVertical: 8,
    },
    errorText: {
      color: '#d9534f',
    },
  });

export default Drivers;